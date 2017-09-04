/**
 * Takes a delay (in seconds), and returns the Date number that many seconds ahead.
 * @param delay 
 */
export const calculateNextSearchTime = (delay: number): Date => {
  return new Date(Date.now() + delay * 1000);
};