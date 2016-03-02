import jQuery from 'jquery';

class Area
{
  constructor(){
    this.server = "https://arearate.herokuapp.com/areas"
  }

  index(){

    jQuery.getJSON( this.server );
  }

}

let area = new Area;

export default area;
