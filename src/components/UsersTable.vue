<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { supabase } from '@/lib/SupabaseClient'

const users = ref<any[] | null>([])

const getUsers = async () => {
  const { data, error } = await supabase.from('users').select().order('name', { ascending: true })

  if (error) {
    console.log(error)
    alert(error)
  }

  users.value = data
}

onMounted(() => {
  getUsers()
})
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Alias</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Maleta</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.alias }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.surname }}</td>
        <td>
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar basic example">
            <div class="btn-group" role="group" aria-label="Group one">
              <RouterLink :to="{ name: 'maleteroForm', params: { userId: user.id } }"
                type="button"
                class="btn btn-outline-success"
              >Agregar
            </RouterLink>
              <RouterLink :to="{ name: 'maleteroForm', params: { userId: user.id } }"
                type="button"
                class="btn btn-outline-info"
              >Editar
            </RouterLink>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
