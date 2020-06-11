<template>
  <section>
    <div class="container-fluid">
      <div class="row text-light">
        <div class="col-md-6">
          <h3>Editor</h3>
          <editor
            v-model="content"
            ref="”aceeditor”"
            @init="editorInit"
            lang="”markdown”"
            theme="dracula"
            :height="height"
          ></editor>
        </div>
        <div class="col-md-6">
          <h3>Previewer</h3>
          <div class="card text-left" :style="styleObject">{{content}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {
    editor: require("vue2-ace-editor")
  },
  data() {
    return {
      styleObject: {
        height: window.innerHeight - 100 + "px",
        color: "black",
        overflowY: "auto"
      },
      content: "",
      height: window.innerHeight - 100
    };
  },
  methods: {
    editorInit() {
      require("brace/ext/language_tools");
      require("brace/mode/html");
      require("brace/mode/markdown");
      require("brace/theme/dracula");
    }
  }
};
</script>