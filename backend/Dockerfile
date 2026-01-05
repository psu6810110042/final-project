FROM rust:1.92-slim-bookworm as builder

WORKDIR /app

# Create a dummy project to build dependencies first
RUN cargo new --bin backend
WORKDIR /app/backend
COPY ./Cargo.toml ./Cargo.lock ./
# Build only dependencies to cache them
RUN cargo build --release
# Remove the dummy src
RUN rm src/*.rs

# Copy your actual source code
COPY ./src ./src
# Touch main.rs to force a rebuild of your code (not deps)
RUN touch src/main.rs
RUN cargo build --release

FROM debian:bookworm-slim

WORKDIR /app
# Install OpenSSL/Ca-Certificates if needed (good practice)
RUN apt-get update && apt-get install -y ca-certificates libssl-dev && rm -rf /var/lib/apt/lists/*

# Copy the binary from the builder stage
COPY --from=builder /app/backend/target/release/backend ./backend

# Expose the port
EXPOSE 8000

# Run the binary
CMD ["./backend"]
