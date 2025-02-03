class SortedList {
  constructor(items = []) {
    this.items = items
    this.length = items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
    return this.items
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
      let sum = this.items.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0);
      return sum
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let sum = this.items.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0);
      return sum / this.items.length
    }
  }
}

module.exports = SortedList;
