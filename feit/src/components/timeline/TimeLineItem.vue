<template>
  <div :class="[index % 2 == 0 ? 'right' : 'left']">
    <div class="timeline-content">
      <h5 class="timeline-content__year">{{ year }}</h5>
      <h2 class="timeline-content__title">{{ title }}</h2>
      <p class="timeline-content__description">{{ description }}</p>
    </div>
  </div>
  <!-- <div class="right">
        <div class="content">
          <h2>2016</h2>
          <p>Lorem ipsum..</p>
        </div>
  </div>-->
</template>

<script>
export default {
  name: "TimeLine",
  props: ["year", "title", "description", "index"]
};
</script>

<style scoped>
.timeline .left,
.timeline .right {
  width: 45%;
  /* background:red; */
  padding-bottom: 1.5em;
}

.timeline .left::before,
.timeline .right::before {
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: #ffffff;
  border: 5px solid #4816d7;

  position: absolute;
  left: 50%;
  transform: translate(-40%, 0%);
}

.timeline .right {
  align-self: flex-end;
}

.timeline-content {
  padding: 2em;
  background: linear-gradient(0deg, #5d6a8b, #5d6a8b);
  box-shadow: 0px 20px 30px rgba(29, 12, 79, 0.3);
  border-radius: 7px;  
}

.timeline-content__description,
.timeline-content__title,
.timeline-content__year {
  font-size: .9rem !important;
}

.timeline-content__year,
.timeline-content__description {
  color: #beccee !important;
}

.timeline-content__year {
  font-weight: 600;
}

.timeline-content__title {
  font-weight: 600;
  margin-top: 1.25em;
  margin-bottom: 1em;
  color: #ffffff;
}

.timeline-content__description {
  font-weight: normal;
  line-height: 1.75;
}

@media screen and (max-width: 960px) {
  .timeline .right {
    align-self: flex-start !important;
  }

  .timeline .left::before,
  .timeline .right::before {
    left: 2em;
  }

  .timeline .left,
  .timeline .right {
    width: 100%;
    padding-left: 3em;
  }
}
</style>
