var SpaceAge = function(seconds){
  this.seconds = seconds;
  
  var earthYears = this.seconds/31557600;
  
  var rounding = function(planetYears){
    return Math.round(earthYears / planetYears *100)/100;
  };

  this.onEarth = function(){
    return rounding(1);
  };
  this.onMercury = function (){
    return rounding(0.2408467);
  }
  this.onVenus = function (){
    return rounding(0.61519726);
  }

  this.onMars = function (){
    return rounding(1.8808158);
  }

  this.onJupiter = function (){
    return rounding(11.862615);
  }

  this.onSaturn = function (){
    return rounding(29.447498);
  }

  this.onUranus = function (){
    return rounding(84.016846);
  }

   this.onNeptune = function (){
    return rounding(164.79132);
  }
};



module.exports = SpaceAge;
