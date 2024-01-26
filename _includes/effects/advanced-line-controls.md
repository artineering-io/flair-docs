### Advanced Controls
To generate lines, we run an edge-detection algorithm on three different types of data: depth, normals and color. So, whenever there is a difference within neighboring pixels for each data type, an edge is extracted.

There is a specific limit to the difference in depth, normals, and color that needs to be exceeded to extract an edge. This limit, in technical terms, is called a threshold.

#### Depth Edge Threshold

#### Flow Edge Threshold

#### Color Edge Threshold

#### Lighting Edge Blend