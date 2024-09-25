angle = 18;
if (angle > 0) {
  if (angle < 90) {
    console.log("Acute Angle.");
  } else if (angle === 90) {
    console.log("Right Angled Triangle.");
  } else if (angle > 90 && angle < 180) {
    console.log("Obtuse Angle.");
  } else if (angle === 180) {
    console.log("Straight Angle.");
  } else {
    console.log("Invalid Value.");
  }
} else {
  console.log("Unsupported Value.");
}
