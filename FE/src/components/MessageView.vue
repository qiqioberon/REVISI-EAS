<template>
    <div :class="isActive ? 'bg-secondary' : ''">
        <div class="d-flex w-100 px-4 py-3 align-items-center cursor-pointer">
            <img class="rounded-circle mr-4" :src="'https://random.imagecdn.app/500/150' || ''" alt="User Picture">

            <div class="w-100">

                <div class="d-flex justify-content-between align-items-center">
                    <div class="text-[15px] text-secondary">
                        <p>wenak</p>
                    </div>
                    <div class="text-[12px] text-secondary">
                        <p>wenak</p>
                    </div>
                </div>

                <div class="d-flex align-items-center">
                    <CheckAllIcon :size="18" :fillColor="tickColor(chat)" class="mr-1" />
                    <div class="text-[15px] w-100 text-secondary d-flex justify-content-between">
                        {{ lastChatMessage(chat) }}...
                    </div>
                </div>
            </div>

        </div>

        <div class="border-bottom w-[calc(100%-80px)] float-right"></div>

    </div>
</template>
  

<script setup>
import CheckAllIcon from 'vue-material-design-icons/CheckAll.vue'

</script>