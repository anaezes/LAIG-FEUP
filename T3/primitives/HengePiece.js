/**
 * HengePiece class
 * @param scene
 * @param player
 * @param position
 */
function HengePiece(scene, player, position) {
	CGFobject.call(this,scene);
	this.scene = scene;
	this.player = player;
    this.initialPosition = position;
	this.position = position;
    this.boardPosition = null;
    this.previousPosition = null;

    this.isPlayed = false;
    this.selected = false;
    this.removed = false;

	this.material1 = this.scene.whiteMaterial;
	this.material2 = this.scene.blackMaterial;

	this.body = new MyCylinder(this.scene, 0.4, 0.9, 0.9, 20, 20, 1, 1);
	this.coverPart1 = new MySphere(this.scene, 1, 20, 20);
	this.coverPart2 = new MySphere(this.scene, 1, 20, 20);

    this.startTime = 0;
    this.currAnimation = null;
    this.type = 'h';
};

HengePiece.prototype = Object.create(CGFobject.prototype);
HengePiece.prototype.constructor=HengePiece;

/**
 * Displays the piece
 */
HengePiece.prototype.display = function (position) {
    
    this.scene.pushMatrix();
    	this.material1.apply();
        this.scene.translate(this.position[0],this.position[1],this.position[2]);
    	this.scene.rotate(-90*DEGREE_TO_RAD, 1,0,0);
    	this.body.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    	this.material1.apply();
    	this.scene.translate(this.position[0],this.position[1]+0.4,this.position[2]);
    	this.scene.scale(0.9,0.2,0.9);
    	this.coverPart1.display();
    this.scene.popMatrix();
 
    this.scene.pushMatrix();
    	this.material2.apply();
    	this.scene.translate(this.position[0],this.position[1]+0.4,this.position[2]);
    	this.scene.scale(0.6,0.25,0.6);
    	this.scene.rotate(-90*DEGREE_TO_RAD, 1,0,0);
    	this.coverPart2.display();
    this.scene.popMatrix();
};

/**
 * Updates the piece's position
 */
HengePiece.prototype.updateCoords = function (position) {
    this.position = position;
};

/**
 * Updates the piece's startTime
 */
HengePiece.prototype.update = function(currTime){
    if(this.startTime == 0){
        this.startTime = currTime;
        return;
    }
    this.startTime = currTime;
};

/**
 * Returns the piece's type
 */
HengePiece.prototype.getType = function() {
    return this.type;
};

/**
 * Returns the piece's animation
 */
HengePiece.prototype.getAnimation = function() {
    return this.currAnimation;
};

/**
 * Returns the piece's position on the board
 */
HengePiece.prototype.getBoardPosition = function() {
    return this.boardPosition;
};