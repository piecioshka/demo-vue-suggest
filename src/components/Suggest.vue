<script>
import { fetchUsers } from '../services/user';
import { debounce } from 'lodash-es';

export default {
  name: 'Suggest',
  data: () => ({
    users: [],
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
      this.query = evt.target.value.trim();
      if (this.query.length === 0) {
        this.users = [];
      } else {
        this.users = await fetchUsers(this.query);
      }
    }, 500),
  },
};
</script>

<template>
  <div class="suggest">
    <label class="suggest-label">
      🔎
      <input
        @keyup="onChange"
        class="suggest-input"
        placeholder="Example: Luke"
      />
    </label>
    <ul class="suggest-list">
      <li v-for="item in suggestions" class="suggest-item">
        <span className="user-name">{{ item.name }}</span>
        <em className="user-email">Height: {{ item.height }}cm</em>
      </li>
    </ul>
  </div>
</template>

<style>
.suggest {
  background-color: aliceblue;
  border-radius: 5px;
  padding: 10px;
}

.suggest-label {
  display: flex;
  margin: 10px 0;
}

.suggest-input {
  margin: 0 0 0 10px;
  width: 100%;
  padding: 3px 5px;
}

.suggest-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 5px;
  overflow: hidden;
}

.suggest-item {
  background-color: lightblue;
  padding: 7px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-name {
  flex-grow: 1;
}

.user-email {
  font-size: small;
}
</style>
