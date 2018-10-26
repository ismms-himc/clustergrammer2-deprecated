// Copyright (c) Nicolas Fernandez.
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel, DOMWidgetView, ISerializers
} from '@jupyter-widgets/base';

import {
  MODULE_NAME, MODULE_VERSION
} from './version';

import cgm_fun from 'clustergrammer-gl';
console.log(cgm_fun);

import * as d3 from 'd3';
console.log(d3)

console.log('working run_viz!!!!!!!!!!!!!!!!!!!!')

export
class ExampleModel extends DOMWidgetModel {
  defaults() {
    return {...super.defaults(),
      _model_name: ExampleModel.model_name,
      _model_module: ExampleModel.model_module,
      _model_module_version: ExampleModel.model_module_version,
      _view_name: ExampleModel.view_name,
      _view_module: ExampleModel.view_module,
      _view_module_version: ExampleModel.view_module_version,
      value : 'Latest Hello World!!!!!!!!!!',
      network: ''
    };
  }

  static serializers: ISerializers = {
      ...DOMWidgetModel.serializers,
      // Add any extra serializers here
    }

  static model_name = 'ExampleModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'ExampleView';   // Set to null if no view
  static view_module = MODULE_NAME;   // Set to null if no view
  static view_module_version = MODULE_VERSION;
}


function make_viz(args){
  var inst_container = document.getElementById(args.container_name)
  console.log('inst_container_2', inst_container)
  args.container = inst_container;
  var cgm = cgm_fun(args)
  console.log('making clustergram in make_viz');
  console.log(cgm);
}

console.log(make_viz)

export
class ExampleView extends DOMWidgetView {
  render() {
    this.value_changed();
    // this.model.on('change:value', this.value_changed, this);

    console.log('\n**********************************************');
    console.log('rendering!!');
    console.log('**********************************************');

    var inst_network_string = this.model.get('network');

    console.log(inst_network_string);

    // var inst_network = JSON.parse(inst_network_string);

    // console.log(inst_network)

  }

  value_changed() {
    this.el.textContent = this.model.get('value');
  }
}
