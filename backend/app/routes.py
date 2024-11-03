from flask import Blueprint, request, jsonify

# Create a Blueprint named 'main'
main = Blueprint('main', __name__)

@main.route('/calculate-dimensions', methods=['POST'])
def calculate_frame_placement():
    # Get data from the request (JSON format)
    data = request.get_json()
    frame_dimensions = data.get('frame_dimensions')
    wall_length = data.get('wall_length', 212)  # Default value if not provided
    margin = data.get('margin', 25)  # Dynamic value with a default of 25
    desired_gap = data.get('desired_gap', 15)  # Dynamic value with a default of 15

    if not frame_dimensions or not isinstance(frame_dimensions, dict):
        return jsonify({"error": "Invalid frame dimensions"}), 400

    num_gaps = len(frame_dimensions) + 1

    total_width = 0
    total_width_gap = 0

    for frame_name, dimensions in frame_dimensions.items():
        width = dimensions["width"]
        height = dimensions["height"]

        total_width += width
        total_width_gap += width + desired_gap / 2

    if (total_width + (margin * 2)) > wall_length or (total_width_gap + (margin * 2)) > wall_length:
        return jsonify({"message": "Not enough space for all frames"})

    total_width_margins = total_width_gap + (margin * 2)
    width_difference = wall_length - total_width_margins
    frame_spacing = width_difference / num_gaps

    # Return the results as a JSON response
    return jsonify({
        "total_width": total_width,
        "total_width_gap": total_width_gap,
        "total_width_with_margins": total_width_margins,
        "width_difference": width_difference,
        "frame_spacing": frame_spacing
    })
