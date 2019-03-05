// time: O(n)
// space: O(1)
// where n is the length of the linked list
const removeKthNodeFromEnd = (head, k) => {
  let count = 0;
  let first = head;
  let second = head;

  while (first.next) {
    count === k ? (second = second.next) : count++;
    first = first.next;
    if (first.next === null) {
      if (count < k) {
        head.value = head.next.value;
        head.next = head.next.next;
      } else {
        second.next = second.next.next;
      }
      return;
    }
  }
};
