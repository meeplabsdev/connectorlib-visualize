use actix_web::{App, HttpResponse, HttpServer, web};
use anyhow::Result;
use vite_actix::proxy_vite_options::ProxyViteOptions;
use vite_actix::start_vite_server;
use vite_actix::vite_app_factory::ViteAppFactory;

#[actix_web::main]
async fn main() -> Result<()> {
    if cfg!(debug_assertions) {
        ProxyViteOptions::new()
            .log_level(log::Level::Debug)
            .working_directory("./www")
            .build()?;
    }

    let server = HttpServer::new(move || {
        App::new()
            .route("/api/", web::get().to(HttpResponse::Ok))
            .configure_vite()
    })
    .bind("127.0.0.1:8740")?
    .run();

    if cfg!(debug_assertions) {
        start_vite_server()?;
    }

    println!("Server running at http://127.0.0.1:8740/");
    Ok(server.await?)
}
