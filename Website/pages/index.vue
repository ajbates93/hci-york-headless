<template>

  <div>
    <!-- Section: Hero Image -->
    <div class="hero relative angled-bottom-white">
      <picture v-if="displayData?.banner" class="z-2">
        <img :src="`http://localhost:1337${displayData.banner}`" alt="Banner" />
      </picture>
      <div class="absolute z-5 w-full h-full top-0 left-0 bg-black/40"></div>
      <div class="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 text-center text-lightest-grey">
        <h1 class="text-6xl font-bold my-3">{{ displayData?.title }}</h1>
        <h3 class="text-2xl font-bold my-3">{{ displayData?.summary }}</h3>
        <button class="bg-primary text-lightest-grey font-bold py-3 px-10 rounded my-3">Talk to us</button>
      </div>
    </div>
    <!-- Section: Home Page First Text -->
    <section class="container mx-auto px-10 py-20">
      <div class="text-center max-w-3xl mx-auto">
        <div class="text-2xl text-dark-grey font-bold">{{ displayData?.top_content }}</div>
      </div>
    </section>
    <section class="angled-top-white angled-bottom-primary min-h-[400px] pt-40 py-20 bg-primary">
      <PageHighlights />
    </section>
    <section class="angled-top-primary min-h-[400px] pt-40 py-20 bg-white">
      <CaseStudies />
    </section>
    <!-- Section: Page Highlights -->
    <!-- Section: Case Studies -->
    <!-- Section: Testimonials -->
    <!-- Section: Contact Form -->
    <!-- Section: Call to Action -->
  </div>
  
</template>

<script setup lang="ts">

type HomePage = {
  title: string,
  summary: string,
  top_content: string,
  banner: string
}
type HomePageResponse = {
  title: string,
  summary: string,
  top_content: string,
  banner: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

const { findOne } = useStrapi()
const displayData = ref<HomePage>()

try {
  const { data } = await findOne<HomePageResponse>('home-page?populate=*')
  displayData.value = {
    title: data.attributes.title,
    summary: data.attributes.summary,
    top_content: data.attributes.top_content,
    banner: data.attributes.banner.data.attributes.url
  }
} catch (error) {
  console.error(error)
}

</script>

<style lang="less">
.angled-bottom-white {
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background: #ffffff;
    transform: skewY(-3deg);
    transform-origin: bottom right;
  }
}
.angled-top-white {
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background: #ffffff;
    transform: skewY(2deg);
    transform-origin: bottom right;
  }
}
.angled-top-primary {
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background: #00A1B0;
    transform: skewY(-2deg);
    transform-origin: bottom left;
  }
}
.angled-bottom-primary {
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background: #00A1B0;
    transform: skewY(-3deg);
    transform-origin: bottom right;
  }
}
</style>