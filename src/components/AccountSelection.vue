<template>
    <div class="account-selection">
        <div class="background-fade"></div>
        <h1>Who's watching?</h1>
        <div class="accounts">
            <div class="account" v-for="account in accounts" :key="account.id" @click="selectAccount(account)" >
                <div class="account-image">
                    <img :src="account.image" alt="">
                </div>
                <div class="account-name">
                    {{ account.name }}
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AccountSelection',
    data() {
      return {
        accounts: [
          { id: 1, name: 'Mio Account' , image: '/images/icon-account-boolflix.jpg' },
          { id: 2, name: 'Kids', image: '/images/icon-kids-boolflix.png' },
          { id: 3, name: 'Add Profile', image: '/images/addprofile-boolflix.PNG' },
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
  
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.account-selection {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $bg-accounts;
    .background-fade {
            position: absolute;
            top: 0;
            width: 100%;
            height: 10vh;  
            background: linear-gradient(to bottom,  $bg-black 0%, $bg-accounts 100%);
        }
    h1 {
        font-size: 4.5rem;
        color: $text-light; 
    }
    .accounts{
        display: flex;
        color: $text-gray;
        .account {
            margin: 1em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            .account-image {
                width: 200px;
                height: 200px;
                
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                }
            }
            .account-name {
                font-size: 1.5rem;
                padding: 10px;
            }
        }
    } 
}
</style>