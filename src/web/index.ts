import { Game } from "../game";

class CanvasGameAdapter {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private height: number = window.innerHeight;
  private width: number = window.innerWidth;

  constructor(private game: Game) {
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
  }

  public setup(): void {
    this.gameLoop();
  }

  public gameLoop(): void {
    requestAnimationFrame(this.gameLoop.bind(this));

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.font = "48px Roboto";
    this.ctx.fillText(this.game.randomNumber().toString(), 10, 50);
  }
}

window.onload = () => {
  const adapter = new CanvasGameAdapter(new Game());
  adapter.setup();
};
