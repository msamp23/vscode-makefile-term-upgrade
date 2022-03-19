# ________________________________________________________________________________
# should NOT consider as targets
# ________________________________________________________________________________
UNAME_S := $(shell uname -s)

UNAME_S:=$(shell uname -s)

OUR_URL=https://google.com


# what to build for this case?
%.o:%.cpp
	$(CXX) $(CXXFLAGS) -c -o $@ $<

# ________________________________________________________________________________
# should consider as targets
# ________________________________________________________________________________
should-echo-1:
	@echo "this is a text = file "

should-echo-2:
	@echo "this is a !@#!@$!@!@#()*)()("

file.o : file.c
	@echo "this is a text = file.o"

