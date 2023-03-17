<template>
  <header class="transition p-5 fixed top-0 left-0 w-full z-50" :class="y > 0 ? 'bg-dark-grey' : 'bg-transparent'">
    <div class="container flex justify-between items-center mx-auto">
      <picture>
        <img src="/images/hci-logo-white.svg" class="w-[100px]" alt="Logo" />
      </picture>
      <div>
        <button>
          <Icon name="iconoir-menu" class="text-white" size="2.75em" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

</script>