require.config({
  
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery'
  },

  shim: {
    'jquery': '$'
  }

});

require(['jquery'], function(){
  console.log('Yas!');
});
