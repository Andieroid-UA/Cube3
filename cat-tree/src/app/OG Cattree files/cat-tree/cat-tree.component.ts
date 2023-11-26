import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-tree.component.html',
  styleUrl: './cat-tree.component.css'
})
export class CatTreeComponent implements OnInit{

  constructor() { }

  ngOnInit() {
    this.loadScripts();
  }

  private loadScripts() {

//* This section is the altered files */
    this.loadScript('components/config.min.js');
    this.loadScript('components/menubar.min.js');
    this.loadScript('components/menubar.add.min.js');
    this.loadScript('components/menubar.examples.js');
    this.loadScript('components/menubar.help.min.js');
//****************************************************************************************/

    this.loadScript('bower_components/three.js/build/three.min.js');
    this.loadScript('bower_components/three.js/examples/js/libs/system.min.js');
    this.loadScript('bower_components/three.js/examples/js/controls/EditorControls.js');
    this.loadScript('bower_components/three.js/examples/js/controls/TransformControls.js');
    this.loadScript('bower_components/three.js/examples/js/libs/jszip.min.js');
    this.loadScript('bower_components/three.js/examples/js/libs/inflate.min.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/AMFLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/AWDLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/BabylonLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/ColladaLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/FBXLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/GLTFLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/KMZLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/MD2Loader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/OBJLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/MTLLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/PlayCanvasLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/PLYLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/STLLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/TGALoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/TDSLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/UTF8Loader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/VRMLLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/VTKLoader.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/ctm/lzma.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/ctm/ctm.js');
    this.loadScript('bower_components/three.js/examples/js/loaders/ctm/CTMLoader.js');
    this.loadScript('bower_components/three.js/examples/js/exporters/OBJExporter.js');
    this.loadScript('bower_components/three.js/examples/js/exporters/GLTFExporter.js');
    this.loadScript('bower_components/three.js/examples/js/exporters/STLExporter.js');
    this.loadScript('bower_components/three.js/examples/js/renderers/Projector.js');
    this.loadScript('bower_components/three.js/examples/js/renderers/CanvasRenderer.js');
    this.loadScript('bower_components/three.js/examples/js/renderers/RaytracingRenderer.js');
    this.loadScript('bower_components/three.js/examples/js/renderers/SoftwareRenderer.js');
    this.loadScript('bower_components/three.js/examples/js/renderers/SVGRenderer.js');
    this.loadScript('bower_components/three.js/editor/js/libs/codemirror/codemirror.js');
    this.loadScript('bower_components/three.js/editor/js/libs/codemirror/mode/javascript.js');
    this.loadScript('bower_components/three.js/editor/js/libs/codemirror/mode/glsl.js');
    this.loadScript('bower_components/three.js/editor/js/libs/esprima.js');
    this.loadScript('bower_components/three.js/editor/js/libs/jsonlint.js');
    this.loadScript('bower_components/three.js/editor/js/libs/glslprep.min.js');
    this.loadScript('bower_components/three.js/editor/js/libs/codemirror/addon/dialog.js');
    this.loadScript('bower_components/three.js/editor/js/libs/codemirror/addon/show-hint.js');
    this.loadScript('bower_components/three.js/editor/js/libs/codemirror/addon/tern.js');
    this.loadScript('bower_components/three.js/editor/js/libs/acorn/acorn.js');
    this.loadScript('bower_components/three.js/editor/js/libs/acorn/acorn_loose.js');
    this.loadScript('bower_components/three.js/editor/js/libs/acorn/walk.js');
    this.loadScript('bower_components/three.js/editor/js/libs/ternjs/polyfill.js');
    this.loadScript('bower_components/three.js/editor/js/libs/ternjs/signal.js');
    this.loadScript('bower_components/three.js/editor/js/libs/ternjs/tern.js');
    this.loadScript('bower_components/three.js/editor/js/libs/ternjs/def.js');
    this.loadScript('bower_components/three.js/editor/js/libs/ternjs/comment.js');
    this.loadScript('bower_components/three.js/editor/js/libs/ternjs/infer.js');
    this.loadScript('bower_components/three.js/editor/js/libs/ternjs/doc_comment.js');
    this.loadScript('bower_components/three.js/editor/js/libs/tern-threejs/threejs.js');
    this.loadScript('bower_components/three.js/editor/js/libs/signals.min.js');
    this.loadScript('bower_components/three.js/editor/js/libs/ui.js');
    this.loadScript('bower_components/three.js/editor/js/libs/ui.three.js');
    this.loadScript('bower_components/three.js/editor/js/libs/app.js');
    this.loadScript('bower_components/three.js/editor/js/Player.js');
    this.loadScript('bower_components/three.js/editor/js/Script.js');
    this.loadScript('bower_components/three.js/examples/js/vr/WebVR.js');
    this.loadScript('bower_components/three.js/editor/js/Storage.js');
    this.loadScript('bower_components/three.js/editor/js/Editor.js');
    this.loadScript('bower_components/three.js/editor/js/History.js');
    this.loadScript('bower_components/three.js/editor/js/Loader.js');
    this.loadScript('bower_components/three.js/editor/js/Menubar.File.js');
    this.loadScript('bower_components/three.js/editor/js/Menubar.Edit.js');
    this.loadScript('bower_components/three.js/editor/js/Menubar.Play.js');
    this.loadScript('bower_components/three.js/editor/js/Menubar.Status.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Scene.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Project.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Settings.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Settings.Shortcuts.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Properties.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Object.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Geometry.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Geometry.Geometry.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Geometry.BufferGeometry.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Geometry.Modifiers.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Geometry.BoxGeometry.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Geometry.CircleGeometry.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Geometry.CylinderGeometry.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Geometry.IcosahedronGeometry.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Geometry.PlaneGeometry.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Geometry.SphereGeometry.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Geometry.TorusGeometry.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Geometry.TorusKnotGeometry.js');
    this.loadScript('bower_components/three.js/examples/js/geometries/TeapotBufferGeometry.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Geometry.TeapotBufferGeometry.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Geometry.LatheGeometry.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Material.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Animation.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.Script.js');
    this.loadScript('bower_components/three.js/editor/js/Sidebar.History.js');
    this.loadScript('bower_components/three.js/editor/js/Toolbar.js');
    this.loadScript('bower_components/three.js/editor/js/Viewport.js');
    this.loadScript('bower_components/three.js/editor/js/Viewport.Info.js');
    this.loadScript('bower_components/three.js/editor/js/Command.js');
    this.loadScript('bower_components/three.js/editor/js/commands/AddObjectCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/RemoveObjectCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/MoveObjectCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/SetPositionCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/SetRotationCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/SetScaleCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/SetValueCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/SetUuidCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/SetColorCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/SetGeometryCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/SetGeometryValueCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/MultiCmdsCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/AddScriptCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/RemoveScriptCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/SetScriptValueCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/SetMaterialCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/SetMaterialValueCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/SetMaterialColorCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/SetMaterialMapCommand.js');
    this.loadScript('bower_components/three.js/editor/js/commands/SetSceneCommand.js');

//****************************************************************************************/

    this.loadScript('bower_components/three.js/editor/js/libs/html2canvas.js');
    this.loadScript('bower_components/three.js/editor/js/libs/three.html.js');
    this.loadScript('bower_components/csg.js/csg.js');
    this.loadScript('bower_components/threecsg.js/ThreeCSG.js');
  }

  private loadScript(scriptUrl: string) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    document.body.appendChild(script);
  }

}
