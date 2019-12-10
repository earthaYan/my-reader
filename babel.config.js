module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // babel7以上的按需引入组件
  plugins:[
    ['import',{
      libraryName:'vant',
      libraryDirectory:'es',
      style:true
    },'vant']
  ]
}
