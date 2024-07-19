# Compiler and flags
CXX = g++
CXXFLAGS = -std=c++11 -Wall

# Targets and dependencies
all: libtoken.so readtokens

# libtoken.so target
libtoken.so: token.o
	$(CXX) -shared -o $@ $^ $(CXXFLAGS)

# readtokens target
readtokens: readtokens.o libtoken.so
	$(CXX) -o $@ readtokens.o -L. -ltoken $(CXXFLAGS)

# Generic rule to compile .cpp to .o
%.o: %.cpp token.h
	$(CXX) -c -o $@ $< $(CXXFLAGS)

# Clean rule
clean:
	rm -f readtokens libtoken.so *.o
