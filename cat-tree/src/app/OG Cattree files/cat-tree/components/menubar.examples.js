/**
 * @author felis catus / https://bitbucket.org/felis_catus/
 * Credit goes to mrdoob / http://mrdoob.com/
 */

Menubar.Examples = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( 'Solutions' );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// Solutions

	var items = [
		{ title: 'Hanging Mice Of Babylon', file: 'https://dl.dropboxusercontent.com/s/egli2tpd0jc9jqv/hanging_mice_of_babylon.json?raw=1' },
		{ title: 'Taj Macat', file: 'https://dl.dropboxusercontent.com/s/y1243ej9dyjhp1d/taj_macat.json?raw=1' }
	];

	var loader = new THREE.FileLoader();

	for ( var i = 0; i < items.length; i ++ ) {

		( function ( i ) {

			var item = items[ i ];

			var option = new UI.Row();
			option.setClass( 'option' );
			option.setTextContent( item.title );
			option.onClick( function () {

				if ( confirm( 'Any unsaved data will be lost. Are you sure?' ) ) {

					loader.load( item.file, function ( text ) {

						editor.clear();
						editor.fromJSON( JSON.parse( text ) );

					} );

				}

			} );
			options.add( option );

		} )( i )

	}

	return container;

};
