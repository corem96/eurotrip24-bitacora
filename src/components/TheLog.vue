<script setup lang="ts">
import GeoIcon from './icons/IconGeo.vue'
import HouseIcon from './icons/IconHouse.vue'
import PointerItem from './PointerItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import AirplaneIcon from './icons/IconAirplane.vue'
import BuildingIcon from './icons/IconBuilding.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'


</script>

<template>
  <PointerItem :img="'chih-city-map.jpg'">
    <template #icon>
      <HouseIcon />
    </template>
    <template #heading>
      <h3 class="me-2 text-success-emphasis">22 Sep</h3>
      <h3>Chihuahua</h3>
    </template>
    <template #img-url></template>
    <template #data-list>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 text-warning-emphasis">
            <AirplaneIcon />
          </i>
          Vuelo a Cd. de México: 20:51
        </li>
      </ul>
    </template>
  </PointerItem>

  <PointerItem :img="'mexico-city-map.jpg'">
    <template #icon>
      <HouseIcon />
    </template>
    <template #heading>
      <h3 class="me-2 text-success-emphasis">22 Sep</h3>
      <h3>Cd. de México</h3>
    </template>
    <template #img-url></template>
    <template #data-list>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 text-warning-emphasis">
            <AirplaneIcon />
          </i>
          Aterrizaje a Cd. de México: 23:05
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 text-info-emphasis">
            <BuildingIcon />
          </i>
          Hospedaje: PENDIENTE
        </li>
        <li class="list-group-item"></li>
      </ul>
    </template>
  </PointerItem>

  <PointerItem :img="'madrid-city-map.jpg'">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </PointerItem>

  <PointerItem :img="'londres-city-map.jpg'">
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>. You
    should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </PointerItem>

  <PointerItem :img="'edimburgo-city-map.jpg'">
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </PointerItem>
</template>
