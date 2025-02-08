<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const message = ref('Waiting for updates...');
const events = ref([]);
let eventSource;
let retryCount = 0;
const MAX_RETRIES = 5;

const connectToSSE = () => {
  if (eventSource) {
    eventSource.close();
    console.log('Previous connection closed');
  }

  eventSource = new EventSource('http://localhost:8081/news');

  eventSource.onopen = () => {
    console.log('✅ Connection established');
    retryCount = 0;
  };

  eventSource.onerror = (error) => {
    retryCount++;
    console.log(`❌ Connection error (retry ${retryCount}/${MAX_RETRIES})`);
    
    if (retryCount < MAX_RETRIES) {
      setTimeout(connectToSSE, 1000 * retryCount);
    } else {
      console.error('❌ Maximum retries exceeded');
    }
  };

  eventSource.addEventListener('NEWS', (event) => {
  console.log('📥 New NEWS Event Received');
  console.log('Data:', event.data);
  
  try {
    const parsedData = JSON.parse(event.data);
    console.log('Parsed Data:', parsedData);
    events.value.push(parsedData);
    message.value = 'New update received';
  } catch (error) {
    console.error('❌ Error parsing data:', error);
  }
});

};

onMounted(() => {
  connectToSSE();
});
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <News v-for="event in events" :key="event.id" :title="event.title" :content="event.content" />
  </div>
</template>
