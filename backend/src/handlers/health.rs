use axum::{Json, extract::State};
use sqlx::PgPool;

pub async fn check_health(State(pool): State<PgPool>) -> Json<&'static str> {
    // We could check DB connection here using 'pool'
    Json("Medicine Store System: ONLINE")
}
