<script setup lang="ts">
import { RouterLink } from 'vue-router'
import GeoIcon from './icons/IconGeo.vue'
import HouseIcon from './icons/IconHouse.vue'
import PointerItem from './PointerItem.vue'
import PeopleIcon from './icons/IconPeople.vue'
import PersonWalkingIcon from './icons/IconPersonWalking.vue'
import TrainIcon from './icons/IconTrain.vue'
import BusIcon from './icons/IconBus.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import AirplaneIcon from './icons/IconAirplane.vue'
import BuildingIcon from './icons/IconBuilding.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import QuestionIcon from './icons/IconQuestion.vue'
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
          <i class="me-2 icon-color-yellow">
            <PeopleIcon />
          </i>
          Viajeros: Hector, Javier, Jorge, Ricardo, Sergio, Tania
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-pink air-takeoff">
            <AirplaneIcon />
          </i>
          Vuelo a Cd. de México: &nbsp;<span class="text-info-emphasis">20:50</span>
        </li>
      </ul>
    </template>
  </PointerItem>

  <PointerItem :img="'mexico-city-map.jpg'">
    <template #icon>
      <HouseIcon />
    </template>
    <template #heading>
      <h3 class="me-2 text-success-emphasis">22 - 23 Sep</h3>
      <h3>Cd. de México</h3>
    </template>
    <template #img-url></template>
    <template #data-list>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-yellow">
            <PeopleIcon />
          </i>
          Viajeros: Hector, Javier, Jorge, Ricardo, Sergio, Tania
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-pink air-land">
            <AirplaneIcon />
          </i>
          Aterrizaje a Cd. de México:
          &nbsp;<span class="text-warning-emphasis">22 Sep</span>
          &nbsp;@<span class="text-info-emphasis">23:05</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-indigo">
            <BuildingIcon />
          </i>
          Hospedaje: &nbsp;<span class="text-indigo-emphasis">Cadillac Hotel Boutique</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades: &nbsp;<span class="text-info">NINGUNA (hasta el momento)</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-pink" style="transform: rotate(40deg);">
            <AirplaneIcon />
          </i>
          Vuelo a Madrid:
          &nbsp;<span class="text-warning-emphasis">23 Sep</span>
          &nbsp;@
          &nbsp;<span class="text-info-emphasis">23:45</span>
        </li>
      </ul>
    </template>
    <template #city>
      <RouterLink to='/mexico' type="button" class="btn btn-outline-success">
        Detalles
      </RouterLink>
    </template>
  </PointerItem>

  <PointerItem :img="'madrid-city-map.jpg'">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      <h3 class="me-2 text-success-emphasis">24 - 25 Sep</h3>
      <h3>Madrid</h3>
    </template>
    <template #data-list>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-yellow">
            <PeopleIcon />
          </i>
          Viajeros: Hector, Javier, Jorge, Ricardo, Sergio, Tania
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-pink air-land">
            <AirplaneIcon />
          </i>
          Aterrizaje a Madrid:
          &nbsp;<span class="text-warning-emphasis">24 Sep</span>
          &nbsp;@<span class="text-info-emphasis">18:30</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-indigo">
            <BuildingIcon />
          </i>
          Hospedaje: &nbsp;<span class="me-2 text-info-emphasis">Hostelfly</span>
          &nbsp;|
          &nbsp;<span class="text-warning-emphasis">24 - 25</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades: &nbsp;<span class="text-info">NINGUNA (hasta el momento)</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-pink air-takeoff">
            <AirplaneIcon />
          </i>
          Vuelo a Londres:
          &nbsp;<span class="text-warning-emphasis">25 Sep</span>
          &nbsp;@<span class="text-info-emphasis">07:35</span>
        </li>
      </ul>
    </template>
  </PointerItem>

  <PointerItem :img="'londres-city-map.jpg'">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      <h3 class="me-2 text-success-emphasis">25 - 27 Sep</h3>
      <h3>Londres</h3>
    </template>
    <template #data-list>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-yellow">
            <PeopleIcon />
          </i>
          Viajeros: Hector, Javier, Jorge, Ricardo, Sergio, Tania
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-pink air-land">
            <AirplaneIcon />
          </i>
          Aterrizaje a Londres:
          &nbsp;<span class="text-warning-emphasis">25 Sep</span>
          &nbsp;@<span class="text-info-emphasis">09:00</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-indigo">
            <BuildingIcon />
          </i>
          Hospedaje (Hector, Javier, Ricardo, Sergio):
          &nbsp;<span class="me-2 text-info-emphasis">Clink261</span>
          &nbsp;|
          &nbsp;<span class="text-warning-emphasis">25 - 27</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-indigo">
            <BuildingIcon />
          </i>
          Hospedaje (Tania y Jorge):
          &nbsp;<span class="me-2 text-info-emphasis">The Walrus</span>
          &nbsp;|
          &nbsp;<span class="text-warning-emphasis">25 - 26</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-indigo">
            <BuildingIcon />
          </i>
          Hospedaje (Tania y Jorge):
          &nbsp;<span class="me-2 text-info-emphasis">Clink261</span>
          &nbsp;|
          &nbsp;<span class="text-warning-emphasis">26 - 27</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 25 Sep:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 26 Sep:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-blue">
            <TrainIcon />
          </i>
          Tren a Edimburgo:
          &nbsp;<span class="text-warning-emphasis">27 Sep</span>
          &nbsp;@<span class="text-info-emphasis">10:45</span>
        </li>
      </ul>
    </template>
  </PointerItem>

  <PointerItem :img="'edimburgo-city-map.jpg'">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      <h3 class="me-2 text-success-emphasis">27 - 30 Sep</h3>
      <h3>Edimburgo</h3>
    </template>
    <template #data-list>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-yellow">
            <PeopleIcon />
          </i>
          Viajeros: Hector, Javier, Jorge, Ricardo, Sergio, Tania
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-blue">
            <TrainIcon />
          </i>
          Llegada a Edimburgo:
          &nbsp;<span class="text-warning-emphasis">27 Sep</span>
          &nbsp;@<span class="text-info-emphasis">15:11</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-indigo">
            <BuildingIcon />
          </i>
          Hospedaje (todos):
          &nbsp;<span class="me-2 text-info-emphasis">Belford</span>
          &nbsp;|
          &nbsp;<span class="text-warning-emphasis">27 - 30</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 27 Sep:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 28 Sep:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 29 Sep:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 30 Sep:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-pink air-takeoff">
            <AirplaneIcon />
          </i>
          Vuelo a Amsterdam:
          &nbsp;<span class="text-warning-emphasis">30 Sep</span>
          &nbsp;@<span class="text-info-emphasis">10:05</span>
        </li>
      </ul>
    </template>
  </PointerItem>

  <PointerItem :img="'amsterdam-city-map.jpg'">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      <h3 class="me-2 text-success-emphasis">30 Sep - 3 Oct</h3>
      <h3>Amsterdam</h3>
    </template>
    <template #data-list>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-yellow">
            <PeopleIcon />
          </i>
          Viajeros: Hector, Javier, Jorge, Ricardo, Sergio, Tania
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-pink air-land">
            <AirplaneIcon />
          </i>
          Aterrizaje en Amsterdam:
          &nbsp;<span class="text-warning-emphasis">30 Sep</span>
          &nbsp;@<span class="text-info-emphasis">12:40</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-indigo">
            <BuildingIcon />
          </i>
          Hospedaje (todos):
          &nbsp;<span class="me-2 text-info-emphasis">Hans Brinker</span>
          &nbsp;|
          &nbsp;<span class="text-warning-emphasis">30 Sep - 3 Oct</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 30 Sep:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 1 Oct:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 2 Oct:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 3 Oct:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-pink air-takeoff">
            <AirplaneIcon />
          </i>
          Vuelo a Praga:
          &nbsp;<span class="text-warning-emphasis">3 Oct</span>
          &nbsp;@<span class="text-info-emphasis">18:35</span>
        </li>
      </ul>
    </template>
  </PointerItem>

  <PointerItem :img="'praga-city-map.jpg'">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      <h3 class="me-2 text-success-emphasis">3 - 5 Oct</h3>
      <h3>Praga</h3>
    </template>
    <template #data-list>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-yellow">
            <PeopleIcon />
          </i>
          Viajeros: Hector, Javier, Jorge, Ricardo, Sergio, Tania
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-pink air-land">
            <AirplaneIcon />
          </i>
          Aterrizaje en Praga:
          &nbsp;<span class="text-warning-emphasis">3 Oct</span>
          &nbsp;@<span class="text-info-emphasis">20:05</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-indigo">
            <BuildingIcon />
          </i>
          Hospedaje (Tania y Jorge):
          &nbsp;<span class="me-2 text-info-emphasis">Luma Terra</span>
          &nbsp;|
          &nbsp;<span class="text-warning-emphasis">3 - 5 Oct</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-indigo">
            <BuildingIcon />
          </i>
          Hospedaje (Hector, Javier, Ricardo, Sergio):
          &nbsp;<span class="me-2 text-info-emphasis">Prague Dream</span>
          &nbsp;|
          &nbsp;<span class="text-warning-emphasis">3 - 5 Oct</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 3 Oct:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 4 Oct:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 5 Oct:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-blue">
            <BusIcon />
          </i>
          Camión a Budapest:
          &nbsp;<span class="text-warning-emphasis">5 Oct</span>
          &nbsp;@<span class="text-info-emphasis">06:15</span>
        </li>
      </ul>
    </template>
  </PointerItem>

  <PointerItem :img="'budapest-city-map.jpg'">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      <h3 class="me-2 text-success-emphasis">5 - 7 Oct</h3>
      <h3>Budapest</h3>
    </template>
    <template #data-list>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-yellow">
            <PeopleIcon />
          </i>
          Viajeros: Hector, Javier, Jorge, Ricardo, Sergio, Tania
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-blue">
            <BusIcon />
          </i>
          Llegada a Budapest:
          &nbsp;<span class="text-warning-emphasis">5 Oct</span>
          &nbsp;@<span class="text-info-emphasis">13:20</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-indigo">
            <BuildingIcon />
          </i>
          Hospedaje (Tania y Jorge):
          &nbsp;<span class="me-2 text-info-emphasis">Meininger</span>
          &nbsp;|
          &nbsp;<span class="text-warning-emphasis">5 - 7 Oct</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-indigo">
            <BuildingIcon />
          </i>
          Hospedaje (Hector, Javier, Ricardo, Sergio):
          &nbsp;<span class="me-2 text-info-emphasis">Hive Party</span>
          &nbsp;|
          &nbsp;<span class="text-warning-emphasis">5 - 7 Oct</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 5 Oct:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 6 Oct:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-teal">
            <PersonWalkingIcon />
          </i>
          Actividades 7 Oct:
          &nbsp;<span class="bg-danger">POR DEFINIR</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-pink air-takeoff">
            <AirplaneIcon />
          </i>
          Vuelo a Madrid (Hector, Sergio):
          &nbsp;<span class="text-warning-emphasis">7 Oct</span>
          &nbsp;@<span class="text-info-emphasis">17:40</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-blue">
            <TrainIcon />
          </i>
          Tren a Hallstatt (Jorge, Ricardo, Tania):
          &nbsp;<span class="text-warning-emphasis">7 Oct</span>
          &nbsp;@<span class="text-info-emphasis">8:40</span>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="me-2 icon-color-yellow">
            <QuestionIcon />
          </i>
          Vuelo/Tren/Camión (Javier) a ¿?:
          &nbsp;<span class="text-warning-emphasis">7 Oct</span>
          &nbsp;@<span class="text-info-emphasis">¿?</span>
        </li>
      </ul>
    </template>
  </PointerItem>
</template>

<style scoped>
.air-takeoff {
  transform: rotate(40deg)
}

.air-land {
  transform: rotate(120deg)
}

.icon-color-teal {
  color: var(--vt-cl-teal)
}

.icon-color-yellow {
  color: var(--vt-cl-yellow)
}

.icon-color-blue {
  color: var(--vt-cl-blue)
}

.icon-color-indigo {
  color: var(--vt-cl-indigo)
}

.icon-color-red {
  color: var(--vt-cl-red);
}

.icon-color-pink {
  color: var(--vt-cl-pink)
}

.text-indigo-emphasis {
  color: var(--vt-cl-indigo)
}
</style>