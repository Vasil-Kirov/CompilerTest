@ECHO OFF


PUSHD bin
rcp ../build.rcp %1 %2 --link opengl32.lib ../lib/SDL3.lib
POPD


