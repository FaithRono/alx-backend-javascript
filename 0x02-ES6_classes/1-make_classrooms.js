// Import the ClassRoom class
import ClassRoom from './0-classroom';

// Define and export the initializeRooms function
export default function initializeRooms() {
  // Create three ClassRoom objects with sizes 19, 20, and 34
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  // Return the array of ClassRoom objects
  return [room1, room2, room3];
}
