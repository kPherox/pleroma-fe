<template>
  <div v-if="loggedIn">
    <template v-if="visibility !== 'private' && visibility !== 'direct'">
      <i
        :class="classes"
        class="button-icon retweet-button icon-retweet rt-active"
        :title="$t('tool_tip.repeat')"
        @click.prevent="retweet()"
      />
      <span v-if="!mergedConfig.hidePostStats && status.repeat_num > 0">{{ status.repeat_num }}</span>
    </template>
    <template v-else>
      <i
        :class="classes"
        class="button-icon icon-lock"
        :title="$t('timeline.no_retweet_hint')"
      />
    </template>
  </div>
  <div v-else-if="!loggedIn">
    <i
      :class="classes"
      class="button-icon icon-retweet"
      :title="$t('tool_tip.repeat')"
    />
    <span v-if="!mergedConfig.hidePostStats && status.repeat_num > 0">{{ status.repeat_num }}</span>
  </div>
</template>

<script src="./retweet_button.js" ></script>

<style lang="scss">
@import '../../_variables.scss';
.rt-active {
  cursor: pointer;
  animation-duration: 0.6s;
  &:hover {
    color: $fallback--cGreen;
    color: var(--cGreen, $fallback--cGreen);
  }
}
.icon-retweet.retweeted {
  color: $fallback--cGreen;
  color: var(--cGreen, $fallback--cGreen);
}
</style>
