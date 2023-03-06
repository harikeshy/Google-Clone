<template>
  <router-view />
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
}
.formContainer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
}
.formContainer__secton {
  width: 40%;
  text-align: center;
}
.formContainer_section-img {
  margin-bottom: 12px;
}
.formContainer__input {
  width: 100%;
  border-radius: 24px;
  height: 50px;
  padding: 0 50px;
  border: 1px solid #dfe1ef;
  outline: none;
  font-size: 16px;
}
.container_form {
  position: relative;
}
.icon_search {
  position: absolute;
  left: 25px;
  top: 18px;
  color: #9aa0ab;
}
.microphone {
  position: absolute;
  right: 25px;
  top: 16px;
  color: #4285f4;
}
.google_btn {
  background: #f2f2f2;
  color: #5f6368;
  padding: 10px 16px;
  border: none;
  outline: none;
  border-radius: 3px;
  margin-top: 20px;
}
.result-inner {
  width: 1200px;
  margin: 35px auto;
  display: flex;
  align-items: center;
}
.result_img img {
  width: 92px;
  height: 30px;
  cursor: pointer;
}
.resultForm {
  width: 600px;
  margin-left: 20px;
}
.resultForm .formContainer__input {
  width: 100% !important;
}
.show {
  width: 1200px;
  margin: 20px auto;
}
.inner_results {
  width: 700px;
  margin-top: 20px;
}
.top_link {
  color: #202124;
  font-size: 14px;
  margin-bottom: 6px;
}
.link_text {
  font-size: 20px;
  text-decoration: none;
  color: #1a0dab;
  margin-block: 10px;
}
.description {
  color: #4d5156;
  font-size: 14px;
}
.link_text a {
  text-decoration: none;
}
.link_text a:hover {
  text-decoration: underline;
}
</style>
