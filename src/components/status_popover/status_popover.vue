<template>
  <Popover
    trigger="hover"
    popover-class="status-popover"
    :bound-to="{ x: 'container' }"
    @show="enter"
  >
    <template slot="trigger">
      <slot />
    </template>
    <div
      slot="content"
    >
      <Status
        v-if="status"
        :is-preview="true"
        :statusoid="status"
        :compact="true"
      />
      <div
        v-else-if="error"
        class="status-preview-no-content faint"
      >
        {{ $t('status.status_unavailable') }}
      </div>
      <div
        v-else
        class="status-preview-no-content"
      >
        <i class="icon-spin4 animate-spin" />
      </div>
    </div>
  </Popover>
</template>

<script src="./status_popover.js" ></script>

<style lang="scss">
@import '../../_variables.scss';

.status-popover {
  font-size: 1rem;
  min-width: 15em;
  max-width: 95%;

  border-color: $fallback--border;
  border-color: var(--border, $fallback--border);
  border-style: solid;
  border-width: 1px;
  border-radius: $fallback--tooltipRadius;
  border-radius: var(--tooltipRadius, $fallback--tooltipRadius);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  box-shadow: var(--popupShadow);

  .status-el.status-el {
    border: none;
  }

  .status-preview-no-content {
    padding: 1em;
    text-align: center;

    i {
      font-size: 2em;
    }
  }
}

</style>
