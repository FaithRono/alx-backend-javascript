// This is the main function that initializes and manages a list of San Francisco neighborhoods
export default function getNeighborhoodsList() {
    // Initialize the list of neighborhoods with 'SOMA' and 'Union Square'
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    // Store the context of this function in the variable 'self' to access it inside the inner function
    const self = this;
    
    // Define a method 'addNeighborhood' to add a new neighborhood to the list
    this.addNeighborhood = (newNeighborhood) => {
      // Add the new neighborhood to the list
      self.sanFranciscoNeighborhoods.push(newNeighborhood);
      // Return the updated list
      return self.sanFranciscoNeighborhoods;
    };
}