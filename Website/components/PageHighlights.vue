<template>
  <div class="grid grid-cols-3 gap-10 container mx-auto">
    <div v-for="highlight, idx in highlights" class="text-white relative">
      <div class="my-3"><Icon :name="highlight.icon" size="3em" /></div>
      <div class="font-bold my-3 text-2xl">{{ highlight.name }}</div>
      <div class="text-lighter-grey text-lg">{{ highlight.summary }}</div>
      <div class="my-10 underline">more</div>
      <div v-if="idx < 3" class="border-b border-2 border-white absolute bottom-0 w-full"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

type PageHighlight = {
  name: string,
  summary: string,
  icon: string,
  link: string
}

const { find } = useStrapi()
const highlights = ref<PageHighlight[]>()

try {
  const res = await find<PageHighlight>('page-highlights?sort=ordering&3Aasc')
  highlights.value = res.data.map(highlight => ({
    name: highlight.attributes.name,
    summary: highlight.attributes.summary,
    icon: highlight.attributes.icon,
    link: highlight.attributes.link
  }))
} catch (error) {
  console.error(error)
}


</script>