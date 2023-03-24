<template>
  <div class="container p-4 flex flex-col items-start space-y-2">
    <span class="text-lg mx-1">{{ count }}</span>
    <button class="bg-blue-300 px-2 py-1 round hover:bg-blue-500 rounded-md" @click="() => count++">
      ClickMe
    </button>
    <button
      class="bg-blue-300 px-2 py-1 round hover:bg-blue-500 rounded-md"
      @click="() => navToSecondPage()"
    >
      To Second Page
    </button>

    <Icon icon="lavcode|svg" size="60" />
    <Icon icon="ant-design:aliyun-outlined" size="60" color="red" />
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  import Icon from '/@/components/Icon';
  import { useAppStore } from '/@/store/modules/app';

  const appStore = useAppStore();
  const count = computed({
    get: () => appStore.getCount,
    set: (val: number) => appStore.setCount(val),
  });

  const router = useRouter();
  function navToSecondPage() {
    router.push('/second');
  }
</script>
