class BinaryHeap:
    def __init__(self):
        self.heaplist = [0]
        self.currentSize = 0

    def percUp(self, i):
        while i // 2 > 0:
            if self.heaplist[i] < self.heaplist[i // 2]:
                self.heaplist[i // 2], self.heaplist[i] = self.heaplist[i], self.heaplist[i // 2]
            i = i // 2

    def insert(self, k):
        self.heaplist.append(k)
        self.currentSize = self.currentSize + 1
        self.percUp(self.currentSize)

    def percDown(self, i):
        while i * 2 <= self.currentSize: # do this until you run out of children in the array
            chooseMinChildIndex = self.chooseMinChild(i)
            if self.heaplist[i] > self.heaplist[chooseMinChildIndex]: # If the value of the current node is bigger than the smallest child
                self.heaplist[chooseMinChildIndex], self.heaplist[i] = self.heaplist[i], self.heaplist[chooseMinChildIndex] # conduct a swap
            i = chooseMinChildIndex # Jump to the smallest child to repeat the process

    def chooseMinChild(self, i):
        if ( ( i * 2 ) + 1 ) > self.currentSize: # There is no right child
            return i * 2 # return left child
        else:
            if self.heaplist[i * 2] < self.heaplist[( ( i * 2 ) + 1 )]: # If the left child is smaller
                return i * 2 # return the left child
            else: # otherwise...
                return ( ( i * 2 ) + 1 ) # return the right child

    def findMin(self):
        return self.heaplist[1]

    def delMin(self):
        retval = self.heaplist[1]
        self.heaplist[1] = self.heaplist[self.currentSize]
        self.currentSize = self.currentSize - 1
        self.heaplist.pop()
        self.percDown(1)
        return retval

    def isEmpty(self):
        return len(self.heaplist) > 1

    def size(self):
        return len(self.heaplist)

    def buildHeap(self, aList):
        i = len(aList) // 2
        self.currentSize = len(aList)
        self.heaplist = [0] + aList[:]
        while i > 0:
            self.percDown(i)
            i -= 1
