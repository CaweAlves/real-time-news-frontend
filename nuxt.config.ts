// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module"
  ],
  primevue: {
    directives: {
      include: ['Ripple', 'Tooltip'],
    },
    options: {
      ripple: true,
      theme: {
        preset: Aura,
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: false
      },
      locale: {
        accept: 'Aceitar',
        reject: 'Rejeitar',
        choose: 'Escolher',
        upload: 'Upload',
        cancel: 'Cancelar',
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
          'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ],
        dateFormat: 'dd/mm/yy',
        firstDayOfWeek: 1,
        today: 'Hoje',
        clear: 'Limpar',
        weekHeader: 'Semana',
        weak: 'Fraco',
        medium: 'Médio',
        strong: 'Forte',
        passwordPrompt: 'Informe uma senha',
        emptyMessage: 'Nenhum registro encontrado',
        emptyFilterMessage: 'Nenhum resultado encontrado',
        selectionMessage: '{0} Itens Selecionados'
      }
    },
  },
  tailwindcss: {
    config: {
      important: true,
      content: [
        "presets/**/*.{js,vue,ts}"
      ],
      theme: {
        extend: {
          fontFamily: {
            'poppins': ['Poppins', 'sans-serif']
          }
        },
      },
    }
  },
  css: ['primeicons/primeicons.css']
});