
	// Variable{s}

	var WINDOW_INNERWIDTH = ( window.innerWidth );
	var WINDOW_INNERHEIGHT = ( window.innerHeight );

	/**
	  * @description detect if string has certain character{s}
	  * @param {*} string - { string }
	  * @param {*} string - { subString }
	  * @returns {Boolean}
	  */

	this.inStr = function ( string, subString ) {

		this.string = string;
		this.subString = subString;

		return ( this.subString.indexOf ( this.string ) !== -1 );

	}

	/**
	  * @description detect if obj is an element
	  * @param {*} obj
	  * @returns {Boolean}
	  */

	this.isElement = function ( obj ) {

		if ( typeof obj !== 'object' ) {
			return false
		}

		let prototypeStr, prototype;

		do {

			prototype = Object.getPrototypeOf ( obj );

				// to work in iframe

					prototypeStr = Object.prototype.toString.call ( prototype );

				// '[object Document]' is used to detect document

			if

			(

				prototypeStr === '[object Element]'

					|| 

				prototypeStr === '[object Document]'

			)

			{

				return true;

			}

			obj = prototype;

			// null is the terminal of object

		}

		while ( prototype !== null ) {

			return false;

		}

	}

	this.AppendOverlay = function ( objData )

	{

		this.objData = objData;

		this.overlay = this.objData.overlay;
		this.overlayName = this.objData.overlayName;
		this.overlayTarget = this.objData.overlayTarget;

		if ( typeof ( this.overlay ) !== 'object' ) { return console.error ( 'ERROR :: { Please ensure you are using an `element` for `overlay` & try again } !' ); }
		if ( typeof ( this.overlayName ) !== 'string' ) { return console.error ( 'ERROR :: { Please ensure you are using a `string` for `overlayName` & try again } !' ); }
		if ( typeof ( this.overlayTarget ) !== 'object' ) { return console.error ( 'ERROR :: { Please ensure you are using an `element` for the `overlay\'s` target & try again } !' ); }

		if ( typeof ( this.overlay ) !== 'null' && this.overlay !== 'null' ) {

			if ( this.isElement ( this.overlayTarget ) ) {

				this.overlayTarget.appendChild ( this.overlay );

			}

			else {

				return console.error (

					'The `overlayTarget`, \'' + this.overlayName + '\' is NOT a `DOM element`!'

				);

			}

		}

		else {

			return console.error (

				'The `DOM element` \'' + this.overlayName + '\' does not exist!'

			);

		}

		return this.overlay;

	}


	this.CreateOverlay = function ( objData )

	{

		this.objData = objData;

		if ( typeof ( this.objData ) !== 'object' ) { return console.error ( 'ERROR :: { Please ensure you are using an `object` for `objectData` & try again } !' ); }

		this.overlayWidth = this.objData.width;
		this.overlayHeight = this.objData.height;
		this.overlayTarget = this.objData.target;
		this.overlayStyle = this.objData.style;

		if ( document.getElementById ( this.objData.id ) === null ) {

			// Create `Overlay`
			this.overlay = document.createElement ( 'div' );
			this.overlay.id = this.objData.id;
			this.overlay.className = this.objData.className;
			this.overlay.width = this.overlayWidth;
			this.overlay.height = this.overlayHeight;
			this.overlay.target = this.overlayTarget;
			this.overlay.style.backgroundColor = this.overlayStyle.backgroundColor;
			this.overlay.style.position = this.overlayStyle.position;
			this.overlay.style.top = this.overlayStyle.top;
			this.overlay.style.left = this.overlayStyle.left;
			this.overlay.style.bottom = this.overlayStyle.bottom;
			this.overlay.style.right = this.overlayStyle.right;
			this.overlay.style.visible = this.overlayStyle.visible;
			this.overlay.style.zIndex = this.overlayStyle.zIndex;

			console.error ( 'top : ' + this.overlay.style.top );
			console.error ( 'left : ' + this.overlay.style.left );
			console.error ( 'bottom : ' + this.overlay.style.bottom );
			console.error ( 'right : ' + this.overlay.style.right );

			console.error ( this.inStr ( 'px', this.overlay.style.top, 1 ) );
			console.error ( this.inStr ( 'px', this.overlay.style.left, 1 ) );
			console.error ( this.inStr ( 'px', this.overlay.style.bottom, 1 ) );
			console.error ( this.inStr ( 'px', this.overlay.style.right, 1 ) );

			if ( this.inStr ( 'px', this.overlay.style.top ) === false ) { this.overlay.style.top = this.overlay.style.top + 'px'; }
			if ( this.inStr ( 'px', this.overlay.style.left ) === false ) { this.overlay.style.left = this.overlay.style.left + 'px'; }
			if ( this.inStr ( 'px', this.overlay.style.bottom ) === false ) { this.overlay.style.bottom = this.overlay.style.bottom + 'px'; }
			if ( this.inStr ( 'px', this.overlay.style.right ) === false ) { this.overlay.style.right = this.overlay.style.right + 'px'; }

			console.error ( 'top : ' + this.overlay.style.top );
			console.error ( 'left : ' + this.overlay.style.left );
			console.error ( 'bottom : ' + this.overlay.style.bottom );
			console.error ( 'right : ' + this.overlay.style.right );

			this.AppendOverlay ( {
				overlay : this.overlay, 
				overlayName : this.overlay.id, 
				overlayTarget : this.overlay.target, 
			}, 1 );

		}

		else {

			return console.error (

				'The element \'' + this.overlay.id + '\' already exists!'

			);

		}

		return this.overlay;

	}

	this.resizeOverlay = this.CreateOverlay ({
		id : 'resizeOverlay', 
		target : document.body, 
		className : 'resizeOverlay', 
		width : WINDOW_INNERWIDTH, 
		height : WINDOW_INNERHEIGHT, 
		style : {
			backgroundColor : '#000', 
			position : 'absolute', 
			top : '500px', 
			left : '0px', 
			bottom : '100px', 
			right : '0px', 
			zIndex : 1000, 
			visible : true, 
		}, 
	});
	console.error ( this.resizeOverlay );


