<template>
  <div
    class="still-image"
    :class="{ animated: animated }"
  >
    <canvas
      v-if="animated"
      ref="canvas"
    />
    <!-- NOTE: key is required to force to re-render img tag when src is changed -->
    <img
      ref="src"
      :key="src"
      :alt="alt"
      :title="alt"
      :src="src"
      :referrerpolicy="referrerpolicy"
      @load="onLoad"
      @error="onError"
    >
  </div>
</template>

<script src="./still-image.js"></script>

<style lang="scss">
@import '../../_variables.scss';

.still-image {
  position: relative;
  line-height: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  &:hover canvas {
    display: none;
  }

  img {
    width: 100%;
    min-height: 100%;
    object-fit: contain;
  }

  &.animated {
    &:hover::before,
    img {
      visibility: hidden;
    }

    &:hover img {
      visibility: visible
    }

    &::before {
      content: 'gif';
      position: absolute;
      line-height: 10px;
      font-size: 10px;
      top: 5px;
      left: 5px;
      background: rgba(127,127,127,.5);
      color: #FFF;
      display: block;
      padding: 2px 4px;
      border-radius: $fallback--tooltipRadius;
      border-radius: var(--tooltipRadius, $fallback--tooltipRadius);
      z-index: 2;
    }
  }

  canvas {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
