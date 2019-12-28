
	/**
	  * @description detect if string has certain character{s}
	  * @param {*} string - { string }
	  * @param {*} string - { subString }
	  * @returns {Boolean}
	  */

	WINDOW_INNERWIDTH = ( window.innerWidth );
	WINDOW_INNERHEIGHT = ( window.innerHeight );

	this.inStr = function ( string, subString ) {

		this.string = string;
		this.subString = subString;

		return ( this.string.indexOf ( this.subString ) !== -1 );

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
				masterKey : this.masterKey, 
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

	this.resizeOverlay = this.CreateOverlay ( {
		id : 'resizeOverlay', 
		target : document.body, 
		className : 'resizeOverlay', 
		width : WINDOW_INNERWIDTH, 
		height : WINDOW_INNERHEIGHT, 
		style : {
			backgroundColor : '#000', 
			position : 'absolute', 
			top : 500, 
			left : 0, 
			bottom : 0, 
			right : 0, 
			zIndex : 1000, 
			visible : true, 
		}, 
	}, 1 );


