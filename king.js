class King {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./croppedSprites.png"), 0, 0, 32, 30, 4, 0.25);

		this.x = -150;
		this.y = 350;
		this.speed = 150;
	};

	update() {
		this.x += this.speed*this.game.clockTick;
		if (this.x >= 1000) this.x = -150;
	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 4);
	};
}