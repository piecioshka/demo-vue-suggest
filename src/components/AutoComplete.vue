<script>
import { fetchUsers } from '../services/user';
import { debounce } from 'lodash-es';

export default {
  name: 'AutoComplete',
  data: () => ({
    users: [],
    // staticSuggestions: [{ name: 'Rocky' }, { name: 'Rambo' }],
    query: '',
  }),
  computed: {
    suggestions: function () {
      return this.users.filter((suggestion) => {
        return suggestion.name.toLowerCase().includes(this.query.toLowerCase());
      });
    },
  },
  methods: {
    onChange: debounce(async function (evt) {
      this.query = evt.target.value;
      this.users = await fetchUsers(this.query);
    }, 500),
  },
};
</script>

<template>
  <div>
    <div>
      <input @keyup="onChange" />
    </div>
    <ul>
      <li v-for="item in suggestions">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
