wall_length = 212
wall_height = 144

frame_dimensions = {
    "frame_one": {
        "width": 10,
        "height": 15
    },
    "frame_two": {
        "width": 12,
        "height": 18
    },
    "frame_three": {
        "width": 14,
        "height": 21
    },
    "frame_four": {
        "width": 16,
        "height": 24
    },
    "frame_five": {
        "width": 18,
        "height": 27
    },
    "frame_six": {
        "width": 20,
        "height": 30
    }
}

num_gaps = len(frame_dimensions) + 1
desired_gap = 15
margin = 25
def calculate_frame_placement(frame_dimensions, wall_length):   

    print(frame_dimensions)
    print(wall_length)

    total_width = 0
    total_width_gap = 0

    for frame_name, frame_dimensions in frame_dimensions.items():

        width = frame_dimensions["width"]
        height = frame_dimensions["height"]

        total_width += width 
        total_width_gap += width + desired_gap/2

        print('total width:', total_width)
        print('total width + gap:', total_width_gap)
    
    if (total_width + (margin * 2)) or (total_width_gap + (margin * 2))> wall_length:
        print('Not enough space for all frames')

    total_width_margins = total_width_gap + (margin * 2)
    print('Total width with margins:', total_width_margins)

    width_difference = wall_length - total_width_margins
    
    frame_spacing = (wall_length - total_width_margins)/num_gaps

    print('Frame spacing:', frame_spacing)

calculate_frame_placement(frame_dimensions, wall_length)