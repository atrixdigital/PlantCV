# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := test_nativemat
DEFS_Debug := \
	'-DNODE_GYP_MODULE_NAME=test_nativemat' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DBUILDING_NODE_EXTENSION' \
	'-DDEBUG' \
	'-D_DEBUG'

# Flags passed to all source files.
CFLAGS_Debug := \
	-fPIC \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-m64 \
	-I/usr/include/opencv \
	-Wall \
	-g \
	-O0

# Flags passed to only C files.
CFLAGS_C_Debug :=

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-std=gnu++0x

INCS_Debug := \
	-I/home/moeidsaleem/.node-gyp/6.11.2/include/node \
	-I/home/moeidsaleem/.node-gyp/6.11.2/src \
	-I/home/moeidsaleem/.node-gyp/6.11.2/deps/uv/include \
	-I/home/moeidsaleem/.node-gyp/6.11.2/deps/v8/include \
	-I$(srcdir)/-I/usr/include/opencv \
	-I$(srcdir)/../nan \
	-I$(srcdir)/inc

DEFS_Release := \
	'-DNODE_GYP_MODULE_NAME=test_nativemat' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \
	-fPIC \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-m64 \
	-I/usr/include/opencv \
	-Wall \
	-O3 \
	-fno-omit-frame-pointer

# Flags passed to only C files.
CFLAGS_C_Release :=

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-std=gnu++0x

INCS_Release := \
	-I/home/moeidsaleem/.node-gyp/6.11.2/include/node \
	-I/home/moeidsaleem/.node-gyp/6.11.2/src \
	-I/home/moeidsaleem/.node-gyp/6.11.2/deps/uv/include \
	-I/home/moeidsaleem/.node-gyp/6.11.2/deps/v8/include \
	-I$(srcdir)/-I/usr/include/opencv \
	-I$(srcdir)/../nan \
	-I$(srcdir)/inc

OBJS := \
	$(obj).target/$(TARGET)/test/nativemat.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.cc FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-pthread \
	-rdynamic \
	-m64

LDFLAGS_Release := \
	-pthread \
	-rdynamic \
	-m64

LIBS := \
	/usr/lib/x86_64-linux-gnu/libopencv_calib3d.so \
	-lopencv_calib3d \
	/usr/lib/x86_64-linux-gnu/libopencv_contrib.so \
	-lopencv_contrib \
	/usr/lib/x86_64-linux-gnu/libopencv_core.so \
	-lopencv_core \
	/usr/lib/x86_64-linux-gnu/libopencv_features2d.so \
	-lopencv_features2d \
	/usr/lib/x86_64-linux-gnu/libopencv_flann.so \
	-lopencv_flann \
	/usr/lib/x86_64-linux-gnu/libopencv_gpu.so \
	-lopencv_gpu \
	/usr/lib/x86_64-linux-gnu/libopencv_highgui.so \
	-lopencv_highgui \
	/usr/lib/x86_64-linux-gnu/libopencv_imgproc.so \
	-lopencv_imgproc \
	/usr/lib/x86_64-linux-gnu/libopencv_legacy.so \
	-lopencv_legacy \
	/usr/lib/x86_64-linux-gnu/libopencv_ml.so \
	-lopencv_ml \
	/usr/lib/x86_64-linux-gnu/libopencv_objdetect.so \
	-lopencv_objdetect \
	/usr/lib/x86_64-linux-gnu/libopencv_ocl.so \
	-lopencv_ocl \
	/usr/lib/x86_64-linux-gnu/libopencv_photo.so \
	-lopencv_photo \
	/usr/lib/x86_64-linux-gnu/libopencv_stitching.so \
	-lopencv_stitching \
	/usr/lib/x86_64-linux-gnu/libopencv_superres.so \
	-lopencv_superres \
	/usr/lib/x86_64-linux-gnu/libopencv_ts.so \
	-lopencv_ts \
	/usr/lib/x86_64-linux-gnu/libopencv_video.so \
	-lopencv_video \
	/usr/lib/x86_64-linux-gnu/libopencv_videostab.so \
	-lopencv_videostab

$(obj).target/test_nativemat.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(obj).target/test_nativemat.node: LIBS := $(LIBS)
$(obj).target/test_nativemat.node: TOOLSET := $(TOOLSET)
$(obj).target/test_nativemat.node: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(obj).target/test_nativemat.node
# Add target alias
.PHONY: test_nativemat
test_nativemat: $(builddir)/test_nativemat.node

# Copy this to the executable output path.
$(builddir)/test_nativemat.node: TOOLSET := $(TOOLSET)
$(builddir)/test_nativemat.node: $(obj).target/test_nativemat.node FORCE_DO_CMD
	$(call do_cmd,copy)

all_deps += $(builddir)/test_nativemat.node
# Short alias for building this executable.
.PHONY: test_nativemat.node
test_nativemat.node: $(obj).target/test_nativemat.node $(builddir)/test_nativemat.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/test_nativemat.node

