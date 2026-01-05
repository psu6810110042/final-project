use crate::handlers;
use axum::{Router, routing::get};
use sqlx::PgPool;
use tower_http::cors::{Any, CorsLayer};

pub fn create_router(pool: PgPool) -> Router {
    let api_routes = Router::new().route("/health", get(handlers::health::check_health));
    // Add more routes here later, e.g., .route("/products", ...)
    //
    let cors = CorsLayer::new()
        .allow_origin(Any) // For dev only. In prod, lock this down!
        .allow_methods(Any)
        .allow_headers(Any);

    Router::new()
        .nest("/api", api_routes) // <--- EVERYTHING is now under /api
        .layer(cors)
        .with_state(pool)
}
