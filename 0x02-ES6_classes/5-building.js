export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new Error('Sqft must be a number');
    this._sqft = sqft;

    if (this.evacuationWarningMessage === undefined) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    console.log(this.sqft);
  }
}
