Function.prototype.bind = function(whoIsCallingMe){
    const self = this;
    return function(){
      return self.apply(whoIsCallingMe, arguments);
    };
  }