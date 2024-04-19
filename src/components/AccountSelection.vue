<template>
    <div class="account-selection">
      <div class="account" v-for="account in accounts" :key="account.id" @click="selectAccount(account)" >
        {{ account.name }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AccountSelection',
    data() {
      return {
        accounts: [
          { id: 1, name: 'Account 1' },
          { id: 2, name: 'Account 2' },
        ],
      };
    },
    methods: {
      selectAccount(account) {
        console.log('Account selected:', account);
        this.$emit('accountSelected', account);
      },
    },
  };
  </script>
  
<style scoped>
.account-selection {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
  
  .account {
    margin: 1em;
    cursor: pointer;
  }
  </style>