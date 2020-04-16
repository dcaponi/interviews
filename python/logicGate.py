class LogicGate:
    def __init__(self, name):
        self.name = name
        self.output = None

    def getName(self):
        return self.name

    def getOutput(self):
        return self.performGateLogic()

class UnaryGate(LogicGate):
    def __init__(self, name):
        LogicGate.__init__(self, name)
        self.pin = None

    def getInputPin(self):
        if self.pin == None:
            return int( input( "Enter a 0 or 1 for the pin on " + self.getName() + " -->" ) )
        else:
            return self.pin

    def setInputToPreviousOutput(self, connector):
        if self.pin == None:
            self.pin = connector.getInGate().getOutput()
        else:
            print("No more free pins to assign" )


class BinaryGate(LogicGate):
    def __init__(self, name):
        LogicGate.__init__(self, name)
        self.pinA = None
        self.pinB = None

    def getInputPinA(self):
        if self.pinA == None:
            return int( input( "Enter a 0 or 1 for Pin A on " + self.getName() + " -->" ) )
        else:
            return self.pinA

    def getInputPinB(self):
        if self.pinB == None:
            return int( input( "Enter a 0 or 1 for Pin B on " + self.getName() + " -->" ) )
        else:
            return self.pinB

    def setInputToPreviousOutput(self, connector):
        if self.pinA == None:
            self.pinA = connector.getInGate().getOutput()
        else:
            if self.pinB == None:
                self.pinB = connector.getInGate().getOutput()
            else:
                print( "No more free pins to assign" )

class Connector:
    def __init__(self, inGate, outGate):
        self.inGate = inGate
        self.outGate = outGate
        self.connect()

    def connect(self):
        self.outGate.setInputToPreviousOutput(self)

    def getInGate(self):
        return self.inGate

class AndGate(BinaryGate):
    def __init__(self, name):
        BinaryGate.__init__(self, name)

    def performGateLogic(self):
        a = self.getInputPinA()
        b = self.getInputPinB()

        if a == 1 and b == 1:
            return 1
        else:
            return 0

class OrGate(BinaryGate):
    def __init__(self, name):
        BinaryGate.__init__(self, name)

    def performGateLogic(self):
        a = self.getInputPinA()
        b = self.getInputPinB()

        if a == 1 or b == 1:
            return 1
        else:
            return 0

class NotGate(UnaryGate):
    def __init__(self, name):
        UnaryGate.__init__(self, name)

    def performGateLogic(self):
        pin = self.getInputPin()

        if pin:
            return 0
        else:
            return 1

class NandGate(AndGate):
    def __init__(self, name):
        AndGate.__init__(self, name)

    def performGateLogic(self):
        if AndGate.performGateLogic(self) == 1:
            return 0
        else:
            return 1

class NorGate(OrGate):
    def __init__(self, name):
        OrGate.__ini__(self, name)

    def performGateLogic(self):
        if OrGate.performGateLogic(self) == 1:
            return 0
        else:
            return 1

class XOrGate(OrGate):
    def __init__(self, name):
        OrGate.__init__(self.name)

    def performGateLogic(self):
        a = self.getInputPinA()
        b = self.getInputPinB()
        if a == b:
            return 0
        else:
            return OrGate.performGateLogic(self)
